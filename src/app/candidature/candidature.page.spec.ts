import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CandidaturePage } from './candidature.page';

describe('Tab2Page', () => {
  let component: CandidaturePage;
  let fixture: ComponentFixture<CandidaturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CandidaturePage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CandidaturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
