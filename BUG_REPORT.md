Bug 1: Checkout enabled with empty cart
Steps:
1. Login
2. Go to cart
3. Click checkout

Expected: Checkout should be disabled  
Actual: Checkout button is enabled  
Severity: Medium
-------------------------------
Bug 2: Error message stays after successful login
Steps:
1. Login with invalid credentials
2. Login with valid credentials

Expected: Error message should disappear  
Actual: Error container still exists  
Severity: Low
----------------------
Bug 3: Sorting resets after refresh
Steps:
1. Sort products by price
2. Refresh page

Expected: Sorting should remain  
Actual: Sorting resets  
Severity: Low