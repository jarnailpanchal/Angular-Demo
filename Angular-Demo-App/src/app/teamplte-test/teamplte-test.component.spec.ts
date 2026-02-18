import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamplteTestComponent } from './teamplte-test.component';

describe('TeamplteTestComponent', () => {
  let component: TeamplteTestComponent;
  let fixture: ComponentFixture<TeamplteTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamplteTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamplteTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
