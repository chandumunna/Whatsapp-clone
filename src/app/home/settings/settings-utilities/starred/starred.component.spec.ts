import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StarredComponent } from './starred.component';

describe('StarredComponent', () => {
  let component: StarredComponent;
  let fixture: ComponentFixture<StarredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarredComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StarredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
