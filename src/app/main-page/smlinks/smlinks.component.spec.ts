import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmlinksComponent } from './smlinks.component';

describe('SmlinksComponent', () => {
  let component: SmlinksComponent;
  let fixture: ComponentFixture<SmlinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmlinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmlinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
