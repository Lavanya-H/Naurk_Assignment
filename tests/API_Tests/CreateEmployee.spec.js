import { test, expect } from '@playwright/test';

test('Create employee', async ({ request }) => {

  const payload = {
    name: 'Maruthi',
    job: 'Tester'
  };

  const response = await request.post(
    'https://reqres.in/api/users',
    {
      headers: {
        'Content-Type': 'application/json'
      },
      data: payload
    }
  );

  // 🔍 Debug logs
  console.log('Status:', response.status());
  console.log('Response:', await response.text());

  // ✅ Assertions
  expect(response.status()).toBe(201);
  expect(response.ok()).toBeTruthy();

  const responseBody = await response.json();
  expect(responseBody.name).toBe(payload.name);
  expect(responseBody.job).toBe(payload.job);
});

