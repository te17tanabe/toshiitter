import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Edit2Page } from './edit2.page';

describe('Edit2Page', () => {
  let component: Edit2Page;
  let fixture: ComponentFixture<Edit2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Edit2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Edit2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
