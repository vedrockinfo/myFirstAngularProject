import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfelsepracticeComponent } from './ifelsepractice.component';

describe('IfelsepracticeComponent', () => {
  let component: IfelsepracticeComponent;
  let fixture: ComponentFixture<IfelsepracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfelsepracticeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfelsepracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
