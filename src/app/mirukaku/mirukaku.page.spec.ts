import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MirukakuPage } from './mirukaku.page';

describe('MirukakuPage', () => {
  let component: MirukakuPage;
  let fixture: ComponentFixture<MirukakuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MirukakuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MirukakuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
