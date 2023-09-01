import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css'],
})
export class IssueListComponent implements OnInit {
  issues: Issue[] = [];
  showReportIssue = false;

  constructor(private issueService: IssuesService) {}

  ngOnInit() {
    this.getIssues();
  }

  private getIssues(): void {
    this.issues = this.issueService.getPendingIssues();
  }

  onCloseReport(): void {
    this.showReportIssue = false;
    this.getIssues();
  }
}
