import { EntityRepository, Repository } from 'typeorm';
import { PostEntity } from '~posts/entities/post.entity';

@EntityRepository(PostEntity)
export class PostRepository extends Repository<PostEntity> {
    async executeRawQuery(sqlQuery: string, parameters?: any[]): Promise<any> {
        return this.query(sqlQuery, parameters);
    }
}
