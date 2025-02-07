import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromvalidationComponent } from './fromvalidation.component';

describe('FromvalidationComponent', () => {
  let component: FromvalidationComponent;
  let fixture: ComponentFixture<FromvalidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FromvalidationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromvalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
