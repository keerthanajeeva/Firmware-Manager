import { AuthGuard } from './auth.guard';
import { HttpClientModule } from '@angular/common/http';

import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
describe('AuthGuard', () => {
  let guard: AuthGuard;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule,HttpClientModule],
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should be created', () => {

    let route;
    let state;

expect(guard.canActivate(route,state)).toBeFalse()
expect(false).toEqual(false);
  });

});
