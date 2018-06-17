import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendingItemComponent } from './spending-item.component';

describe('SpendingItemComponent', () => {
  let component: SpendingItemComponent;
  let fixture: ComponentFixture<SpendingItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpendingItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpendingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
