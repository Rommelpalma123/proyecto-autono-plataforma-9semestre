import { Field, InputType } from 'type-graphql'
import { Client } from '../../../../models/client.models'
import { IsNotEmpty } from 'class-validator'
@InputType()
export class CreateClientInput implements Partial<Client> {
  @Field(() => String)
  @IsNotEmpty()
  nombre: string

  @Field(() => String)
  @IsNotEmpty()
  cedula: string

  @Field(() => String)
  edad: string

  @Field(() => String)
  @IsNotEmpty()
  email: string

  @Field(() => String)
  @IsNotEmpty()
  password: string

  @Field(() => String)
  @IsNotEmpty()
  id_pais: string
}
