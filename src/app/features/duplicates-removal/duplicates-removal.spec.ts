import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicatesRemoval } from './duplicates-removal';

describe('DuplicatesRemoval', () => {
  let component: DuplicatesRemoval;
  let fixture: ComponentFixture<DuplicatesRemoval>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuplicatesRemoval]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuplicatesRemoval);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
