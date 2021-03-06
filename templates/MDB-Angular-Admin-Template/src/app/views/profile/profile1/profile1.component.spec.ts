import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Profile1Component } from './profile1.component';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';

describe('Profile1Component', () => {
  let component: Profile1Component;
  let fixture: ComponentFixture<Profile1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Profile1Component ],
      imports: [MDBBootstrapModulesPro.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Profile1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
