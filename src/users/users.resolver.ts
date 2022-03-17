import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class UsersResolver {
  // constructor(
  //   private authorsService: AuthorsService,
  //   private postsService: PostsService,
  // ) {}

  @Query(() => String)
  async user() {
    return 'I love you Nadia';
  }
}
