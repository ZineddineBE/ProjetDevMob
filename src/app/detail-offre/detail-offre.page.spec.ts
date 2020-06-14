import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailOffrePage } from './detail-offre.page';

describe('DetailOffrePage', () => {
  let component: DetailOffrePage;
  let fixture: ComponentFixture<DetailOffrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailOffrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailOffrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
