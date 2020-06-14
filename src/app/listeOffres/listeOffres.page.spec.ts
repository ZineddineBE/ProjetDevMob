import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ListeOffresPage } from './listeOffres.page';

describe('Tab1Page', () => {
  let component: ListeOffresPage;
  let fixture: ComponentFixture<ListeOffresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListeOffresPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ListeOffresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
