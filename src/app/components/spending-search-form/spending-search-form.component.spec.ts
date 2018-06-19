import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendingSearchFormComponent } from './spending-search-form.component';

describe('SpendingSearchFormComponent', () => {
  let component: SpendingSearchFormComponent;
  let fixture: ComponentFixture<SpendingSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpendingSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpendingSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
