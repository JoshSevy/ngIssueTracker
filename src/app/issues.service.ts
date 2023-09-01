import { Injectable } from '@angular/core';
import { Issue } from './issue';

@Injectable({
  providedIn: 'root',
})
export class IssuesService {
  private issues: Issue[] = [];

  constructor() {}

  createIssue(issue: Issue) {
    // TODO: Update to a random number generater method to keep issueNo unique
    // Or we could check the current highest issueNo and add to that
    issue.issueNo = this.issues.length + 1;
    this.issues.push(issue);
  }

  getPendingIssues(): Issue[] {
    return this.issues.filter((issue) => !issue.completed);
  }
}
