import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { AddressWrapper, LineFormWrapper, Card, CardTitle, Container, CurrencyDollarIcon, MapPinLineIcon, OrderDataWrapper, OrderProductsWrapper, MoneySupplyWrapper, MoneySupply, CreditCardIcon, BankIcon, MoneyIcon, SummaryWrapper, RemoveButton, TrashIcon, SummaryOptions, Price, Hr, ItensWrapper, SubmitButton } from "./styles";
import { Input } from "./components/Input";

import { InputNumber } from "../../components/InputNumber";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

const checkoutFormValidationSchema = zod.object({
  zipCode: zod.string().max(8, 'Cep inválido'),
  street: zod.string(),
  number: zod.string(),
  complement: zod.string(),
  district: zod.string(),
  city: zod.string(),
  state: zod.string(),
  moneySupply: zod.string(),
})

type checkoutFormData = zod.infer<typeof checkoutFormValidationSchema>

export function Checkout(){
  const navigate = useNavigate();
  const {cart, removeProductFromShoppingCart} = useContext(ShoppingCartContext);

  const { register, handleSubmit, formState: { errors } } = useForm<checkoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema)
  });

  const formCurrency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  });
  
  const delivery = Math.random() * (10 - 1) + 1;

  const itemsAmount = 0;
  const total = 0;

  const summary = cart.reduce(
    (acc, cur) => {
      acc.itemsAmount += cur.product.price * cur.amount;
      acc.total = acc.itemsAmount + delivery;
      return acc;
    },{
      itemsAmount,
      total
  })

  const zipCode = register('zipCode', { required: true })
  const street = register('street', { required: true })
  const number = register('number', { required: true })
  const complement = register('complement', { required: false })
  const district = register('district', { required: true })
  const city = register('city', { required: true })
  const state = register('state', { required: true })


  const onSubmit = (data: checkoutFormData) =>{
    console.log(data)

    navigate('/success')
  };

  const handleRemoveItem = (id: number) => {
    removeProductFromShoppingCart(id);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <OrderDataWrapper>
          <h3>Complete seu pedido</h3>

          <Card>
            <CardTitle>
              <MapPinLineIcon/>
              <div>
                <h4>Endereço de Entrega</h4>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </CardTitle>

            <AddressWrapper>
              <Input
                label="zipCode"
                id="zipCode" 
                placeholder="CEP" 
                name={zipCode.name}
                onChange={zipCode.onChange}
                onBlur={zipCode.onBlur}
                inputRef={zipCode.ref}
                width={20}
              />

              <Input 
                label="street" 
                id="street" 
                placeholder="Rua" 
                name={street.name}
                onChange={street.onChange}
                onBlur={street.onBlur}
                inputRef={street.ref}
              />

              <LineFormWrapper>
                <Input
                  id="number" 
                  label="number" 
                  type={"number"}
                  placeholder="Número" 
                  name={number.name}
                  onChange={number.onChange}
                  onBlur={number.onBlur}
                  inputRef={number.ref}
                  width={20}
                />

                <Input 
                  id="complement" 
                  label="complement" 
                  optional 
                  placeholder="Complemento" 
                  name={complement.name}
                  onChange={complement.onChange}
                  onBlur={complement.onBlur}
                  inputRef={complement.ref}
                />
              </LineFormWrapper>

              <LineFormWrapper>
                <Input 
                  id="district" 
                  label="district" 
                  placeholder="Bairro" 
                  name={district.name}
                  onChange={district.onChange}
                  onBlur={district.onBlur}
                  inputRef={district.ref}
                  width={20}
                />

                <Input 
                  id="city" 
                  label="city" 
                  placeholder="Cidade" 
                  name={city.name}
                  onChange={city.onChange}
                  onBlur={city.onBlur}
                  inputRef={city.ref}
                />

                <Input 
                  id="state" 
                  label="state" 
                  placeholder="UF" 
                  name={state.name}
                  onChange={state.onChange}
                  onBlur={state.onBlur}
                  inputRef={state.ref}
                  width={6}
                />
              </LineFormWrapper>
            </AddressWrapper>
          </Card>

          <Card>
            <CardTitle>
              <CurrencyDollarIcon />
              <div>
                <h4>Pagamento</h4>
                <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
              </div>
            </CardTitle>

            <MoneySupplyWrapper>
              <MoneySupply>
                <CreditCardIcon/>
                <input 
                  type="radio" 
                  name="moneySupply" 
                  value="credit card" 
                />
                <label htmlFor="moneySupply">Cartão de crédito</label>
              </MoneySupply>
              <MoneySupply>
                <BankIcon/>
                <input 
                  type="radio" 
                  name="moneySupply" 
                  value="debit card"
                />
                <label htmlFor="moneySupply">cartão de débito</label>
              </MoneySupply>
              <MoneySupply>
               <MoneyIcon/>
               <input 
                type="radio" 
                name="moneySupply" 
                value="cash"
               />
               <label htmlFor="moneySupply">dinheiro</label>
              </MoneySupply>
            </MoneySupplyWrapper>
          </Card>
        </OrderDataWrapper>

        <OrderProductsWrapper>
          <h3>Cafés selecionados</h3>
          <ItensWrapper>

            { cart.map( item => (
              <>
                <div>
                <img src={item.product.image} alt="" />
                
                <SummaryOptions>
                  <span>{item.product.name}</span>
                  <div>
                    <InputNumber value={item.amount}/>
                    <RemoveButton onClick={() => handleRemoveItem(item.product.id)}>
                      <TrashIcon/>
                      Remove
                    </RemoveButton>
                  </div>
                </SummaryOptions>

                <Price>
                  {formCurrency.format(item.product.price)}
                </Price>
              </div>

              <Hr/>
              </>
            ))}

            

          <SummaryWrapper>
            <ul>
              <li>
                <p>Total de itens</p>
                <p>{formCurrency.format(summary.itemsAmount)}</p>
              </li>
              <li>
                <p>Entrega</p>
                <p>{formCurrency.format(delivery)}</p>
              </li>
              <li>
                <span>Total</span>
                <span>{formCurrency.format(summary.total)}</span>
              </li>
            </ul>

            <SubmitButton type="submit" value="Confirmar pedido"/>
          </SummaryWrapper>
          </ItensWrapper>

        </OrderProductsWrapper>
     </Container>
    </form>
  )
}