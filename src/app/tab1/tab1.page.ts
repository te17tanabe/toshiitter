import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  /*
  // 自動取得に必要なパーツ
  interval: any;

  this.interval = setInterval(() => {
    // Function
  }, 5000);
  */
  latitude: Number = 0.0;
  longitude: Number = 0.0;

  // API用
  postObj: any = {};
  returnObj: any = {};
  articleObj: any = {};
  objWord: any;

  username: any = "";

  // 記事
  articleList: any[] = [];

  interval: any;

  constructor(
    private geolocation: Geolocation,
    private alertController: AlertController,
    private router: Router,
    public gs: GlobalService,
  ) {}

  // 自動ログイン管理, 記事取得
  ngOnInit(){
    this.username=localStorage.name;

    console.log("Init!");
    this.postObj["id"] = localStorage.id;
    this.postObj["password"] = localStorage.password;
    this.postObj["prefecture"] = localStorage.prefecture;
    const body = this.postObj;
    console.log(body);

    this.gs.http('https://kn46itblog.com/hackathon/winter2020/php_apis/login.php', body).subscribe(
      res => {
        this.returnObj = res;
        if(this.returnObj["status"] == 200){
          localStorage.hash = this.returnObj["hash"];
          this.getList();
        }
        else{
          this.router.navigate(['/login']);
        }
      },
      error => console.error(error)
    );

    this.interval = setInterval(() => {
      // Function
      this.getList();
    }, 1500);
    */
  }

  async alertGps() {
    const alert = await this.alertController.create({
      header: '座標が観測されました',
      message: '緯度: ' + this.latitude + '<br>経度: ' + this.longitude,
      buttons: ['OK']
    })

    await alert.present();
  }

  onGps = () => {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      this.alertGps(); 
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  navigateToSelf = () => {
    this.router.navigate(['/self', 1, '1']);
  }
  navigateToEdit = () => {
    this.router.navigate(['/edit', 1]);
  }

  getList = () => {
    // 記事取得
    // 座標取得
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;

      this.postObj["hash"] = localStorage.hash;
      this.postObj["latitude"] = this.latitude;
      this.postObj["longitude"] = this.longitude;
      this.postObj["distance"] = Number(localStorage.distance);
      this.postObj["tab"] = 1;
      this.postObj["attribute"] = localStorage.attribute;
      const body = this.postObj;
      console.log(body);

      this.gs.http('https://kn46itblog.com/hackathon/winter2020/php_apis/getDiaryArticle.php', body).subscribe(
        res => {
          console.log(res);
          this.articleObj = res;
          this.articleList = [];
          for(let i: any = 0; i < this.articleObj['article_num']; i++){
            let n = i + 1;
            this.objWord = 'article' + n;

            // 数字→英語の変換
            if(this.articleObj['article_list'][this.objWord]['category_level'] == 1){
              this.articleObj['article_list'][this.objWord]['category_level'] = 'one';
            }
            else if(this.articleObj['article_list'][this.objWord]['category_level'] == 2){
              this.articleObj['article_list'][this.objWord]['category_level'] = 'two';
            }
            else if(this.articleObj['article_list'][this.objWord]['category_level'] == 3){
              this.articleObj['article_list'][this.objWord]['category_level'] = 'three';
            }
            else if(this.articleObj['article_list'][this.objWord]['category_level'] == 4){
              this.articleObj['article_list'][this.objWord]['category_level'] = 'four';
            }
            else if(this.articleObj['article_list'][this.objWord]['category_level'] == 5){
              this.articleObj['article_list'][this.objWord]['category_level'] = 'five';
            }

            this.articleList.push(this.articleObj['article_list'][this.objWord]);
          }
          console.log(this.articleList);
        },
        error => console.error(error)
      );
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
}
/* Alert
  import { Component } from '@angular/core';
  import { AlertController } from '@ionic/angular';
    constructor(public alertController: AlertController) {}

    async presentAlert() {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Alert',
        subHeader: 'Subtitle',
        message: 'This is an alert message.',
        buttons: ['OK']
      });

      await alert.present();
    }
*/
/* GPS
import { Geolocation } from '@ionic-native/geolocation/ngx';

...

constructor(private geolocation: Geolocation) {}

...

this.geolocation.getCurrentPosition().then((resp) => {
 // resp.coords.latitude
 // resp.coords.longitude
}).catch((error) => {
  console.log('Error getting location', error);
});

let watch = this.geolocation.watchPosition();
watch.subscribe((data) => {
 // data can be a set of coordinates, or an error (if an error occurred).
 // data.coords.latitude
 // data.coords.longitude
});
*/
