import type { ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'

import { GqlContext } from '../common'

export function getGraphqlFactory(
	isDev: boolean,
	prefix: string,
	path: string
): ApolloDriverConfig {
	return {
		playground: isDev,
		path: prefix,
		autoSchemaFile: join(process.cwd(), path),
		sortSchema: true,
		context: ({ req, res }: GqlContext) => ({ req, res }),
		introspection: true
	}
}
