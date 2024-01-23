import { TestBed } from '@angular/core/testing';

import { CourseEnrollmentService } from './course-enrollment.service';

describe('CourseEnrollmentService', () => {
  let service: CourseEnrollmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseEnrollmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
