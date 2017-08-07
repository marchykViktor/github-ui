import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoComitsComponent } from './repo-comits.component';

describe('RepoComitsComponent', () => {
  let component: RepoComitsComponent;
  let fixture: ComponentFixture<RepoComitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoComitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoComitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
