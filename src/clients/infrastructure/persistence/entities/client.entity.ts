import { ClientType } from 'src/clients/domain/aggregates/client/client-type.enum';
import { AuditTrailValue } from 'src/shared/infrastructure/persistence/values/audit-trail.value';
import { Column, Entity, PrimaryGeneratedColumn, TableInheritance } from 'typeorm';

@Entity('clients')
@TableInheritance({ column: 'type', })
export class ClientEntity {
  @PrimaryGeneratedColumn('increment', { type: 'bigint', name: 'id', unsigned: true })
  public id: number;

  @Column((type) => AuditTrailValue, { prefix: false })
  public auditTrail: AuditTrailValue;

  @Column({ name: 'type', type: 'enum', enum: ClientType, default: ClientType.BUYER })
  readonly type: ClientType;
}