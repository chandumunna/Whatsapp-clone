import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StatusListComponent } from './status-list.component';

describe('StatusListComponent', () => {
  let component: StatusListComponent;
  let fixture: ComponentFixture<StatusListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StatusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
