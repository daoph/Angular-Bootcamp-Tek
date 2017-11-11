import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { By }                                from '@angular/platform-browser';
import { DebugElement }                      from '@angular/core';

import { UserService }      from './model';
import { WelcomeComponent } from './welcome.component';
import { Testability } from '@angular/core/src/testability/testability';

describe('WelcomeComponent', () => {

  let comp: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let componentUserService: UserService; // the actually injected service
  let userService: UserService; // the TestBed injected service
  let de: DebugElement;  // the DebugElement with the welcome message
  let el: HTMLElement; // the DOM element with the welcome message

  let userServiceStub: {
    isLoggedIn: boolean;
    user: { name: string}
  };
  
  beforeEach(() => {
    // stub UserService for test purposes
userServiceStub = {
  isLoggedIn: true,
  user: { name: 'Test User'}
};
	
	// configure testing module
TestBed.configureTestingModule({
  declarations: [ WelcomeComponent ],
  providers:    [ {provide: UserService,
  useValue: userServiceStub }]
});
	

    fixture = TestBed.createComponent(WelcomeComponent);
    comp    = fixture.componentInstance;

    // UserService actually injected into the component
  userService = fixture.debugElement.injector.get(UserService);
	
    //  get the "welcome" element by CSS selector (e.g., by class name)
    de = fixture.debugElement.query(By.css('.welcome'));
    el = de.nativeElement;
  });
  
  // Test #1
  it('should welcome the user', () => {
    fixture.detectChanges();
    const content = el.textContent;
    expect(content).toContain('Welcome', '"Welcome ..."');
    expect(content).toContain('Test User', 'expected name');
  });

  // Test #2
  it('should welcome "Bubba"', () => {
    userService.user.name = 'Bubba';
    
	// welcome message hasn't been shown yet
    fixture.detectChanges();
    expect(el.textContent).toContain('Bubba');
  });

  // Test #3
  it('should request login if not logged in', () => {
    userService.isLoggedIn = false;
    
	// welcome message hasn't been shown yet
    fixture.detectChanges();
    const content = el.textContent;
    expect(content).not.toContain('Welcome', 'not welcomed');
    expect(content).toMatch(/log in/i, '"log in"');
  });
  
});