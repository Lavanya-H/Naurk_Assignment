import { test, expect } from '@playwright/test';

test('verify list of users', async ({ request }) => {

  const headers = {
    'x-api-key': 'reqres-free-v1'
  };

  const response = await request.get(
    'https://reqres.in/api/users?page=2',
    { headers }
  );
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  console.log(responseBody);

  expect(responseBody.data[0].last_name).toBe('Lawson');

});