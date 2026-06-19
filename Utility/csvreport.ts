import { Reporter, TestCase, TestResult } from '@playwright/test/reporter';
import fs from 'fs';

class CsvReporter implements Reporter {

  private results: string[] = [];

  onTestEnd(test: TestCase, result: TestResult) {

    const status = result.status;
    const title = test.title;
    const duration = result.duration;

    this.results.push(
      `"${title}","${status}","${duration}ms"`
    );
  }

  onEnd() {
    const header = `"Test Name","Status","Duration"\n`;
    fs.writeFileSync(
      'test-report.csv',
      header + this.results.join('\n')
    );
    console.log('CSV Report generated!');
  }
}

export default CsvReporter;