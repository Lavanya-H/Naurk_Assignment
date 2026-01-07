# What you would automate vs keep manual

I would automate features that are used frequently and are important for the application, such as login, basic user flows, and sorting functionality. These are stable features and are executed repeatedly, so automation helps save time and catch issues early.

I would keep UI look and feel, exploratory testing, and accessibility testing manual. These areas require human observation and judgment, and automation may not always catch visual or usability issues.

# Handling Flaky Tests
To handle flaky tests, I avoid using hard waits and rely on Playwright’s automatic waiting mechanism. I also add retries for tests that may fail due to temporary issues like slow loading. Screenshots and videos on failure help me understand what went wrong and fix the issue quickly.

# Why Playwright Over Selenium

Easier to write and understand test scripts
Requires less setup compared to Selenium
Built-in automatic waiting for elements
Faster test execution
Less flaky tests
Supports multiple browsers with the same code
Parallel execution is built in
Screenshots and videos available by default
Better debugging experience

# Scaling for a Real Product
 Add more page objects as the application grows
 Reuse login logic across tests
 Integrate with CI/CD pipelines
 Use storage state to reuse authenticated sessions

