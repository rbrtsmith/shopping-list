import { helloQuery } from './queries'
import { runQuery } from './helpers'

test('get a design', async () => {
  const result = await runQuery(helloQuery)

  expect(result.data?.hello).toBe('Hello from resolver')
})
