import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cart4ModalPage } from './cart4-modal.page';

describe('Cart4ModalPage', () => {
  let component: Cart4ModalPage;
  let fixture: ComponentFixture<Cart4ModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cart4ModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cart4ModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
