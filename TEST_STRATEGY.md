What to Automate
 Login functionality
 Basic user flows
 Sorting functionality
 Smoke and regression tests

What to Keep Manual
 UI look and feel
 Exploratory testing
 Accessibility testing

Handling Flaky Tests
 Avoid hard waits
 Use Playwright auto-waiting features
 Retry failing tests
 Use screenshots and videos for debugging failures

Why Playwright Over Selenium

Easier to write and understand test scripts
Requires less setup compared to Selenium
Built-in automatic waiting for elements
Faster test execution
Less flaky tests
Supports multiple browsers with the same code
Parallel execution is built in
Screenshots and videos available by default
Better debugging experience

Scaling for a Real Product
 Add more page objects as the application grows
 Reuse login logic across tests
 Integrate with CI/CD pipelines
 Use storage state to reuse authenticated sessions

