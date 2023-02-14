import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NicetomeetComponent } from './nicetomeet.component';

describe('NicetomeetComponent', () => {
  let component: NicetomeetComponent;
  let fixture: ComponentFixture<NicetomeetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NicetomeetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NicetomeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
