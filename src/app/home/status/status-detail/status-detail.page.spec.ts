import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StatusDetailPage } from './status-detail.page';

describe('StatusDetailPage', () => {
  let component: StatusDetailPage;
  let fixture: ComponentFixture<StatusDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StatusDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
