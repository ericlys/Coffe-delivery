import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from '@hookform/resolvers/zod';

import { 
  AddressWrapper, 
  LineFormWrapper, 
  Card, 
  CardTitle,
  Container, 
  CurrencyDollarIcon, 
  MapPinLineIcon,
  OrderDataWrapper, 
  OrderProductsWrapper, 
  MoneySupplyWrapper, 
  CreditCardIcon, BankIcon, 
  MoneyIcon, 
  SummaryWrapper, 
  RemoveButton, 
  TrashIcon, 
  SummaryOptions, 
  Price,
  Hr, 
  ItensWrapper, 
  SubmitButton, 
  RadioBox } from "./styles";

import { Input } from "./components/Input";

import { InputNumber } from "../../components/InputNumber";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

const checkoutFormValidationSchema = zod.object({
  zipCode: zod.string().length(9, 'Cep inválido'),
  street: zod.string().min(1),
  number: zod.string().min(1),
  complement: zod.string().optional(),
  district: zod.string().min(1),
  city: zod.string().min(1),
  state: zod.string().min(1),
})

type checkoutFormData = zod.infer<typeof checkoutFormValidationSchema>

type moneySupplyType = 'credit card' | 'debit card' | 'cash';

export function Checkout(){
  const navigate = useNavigate();
  const [moneySupply, setMoneySupply] = useState<moneySupplyType>('credit card');
  const {cart, amountItems, removeProductFromShoppingCart, updateProductAmount, clearShoppingCart} = useCart();

  const { register, handleSubmit, watch, setValue, formState: {errors} } = useForm<checkoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema)
  });

  const formCurrency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  });
  
  const delivery = cart.length ? Math.random() * (amountItems - 1) + 1 : 0;

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



  const onSubmit = (data: checkoutFormData) =>{
    navigate('/success', { state: {
      address: data,
      moneySupply: moneySupply
    }})

    clearShoppingCart();
  };

  const handleRemoveItem = (id: number) => {
    removeProductFromShoppingCart(id);
  }

  const handleUpdateAmount = (amount: number, productId: number) => {
    updateProductAmount(productId, amount);
  }

  const getAddressByZipCode = async (code: string) => {
    const response = await fetch(
      `https://viacep.com.br/ws/${code}/json/`,
    )

    const address = await response.json();
    
    if(!address.erro) {
      setValue("street", address.bairro)
      setValue("complement", address.complemento)
      setValue("district", address.logradouro)
      setValue("city", address.localidade)
      setValue("state", address.uf)
    }
  }

  useEffect(( ) => {
    const code = watch('zipCode').replace(/\D/g, "");
    if(code.length === 8) {
      getAddressByZipCode(code)
    }
  }, [watch('zipCode')])



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
                id="zipCode" 
                label="zipCode"
                mask={"99999-999"}
                placeholder="CEP" 
                {...register('zipCode')}
                width={20}
                error={errors.zipCode?.message}
              />

              <Input 
                id="street" 
                label="street" 
                placeholder="Rua" 
                {...register('street')}
                error={errors.street?.message}
              />

              <LineFormWrapper>
                <Input
                  id="number" 
                  label="number"
                  type={"number"}
                  placeholder="Número" 
                  {...register('number')}
                  error={errors.number?.message}
                  width={20}
                />

                <Input 
                  id="complement" 
                  label="complement" 
                  optional 
                  placeholder="Complemento" 
                  {...register('complement')}
                  register={register}
                />
              </LineFormWrapper>

              <LineFormWrapper>
                <Input 
                  id="district" 
                  label="district"
                  placeholder="Bairro" 
                  register={register}
                  {...register('district')}
                  error={errors.district?.message}
                  width={20}
                />

                <Input 
                  id="city" 
                  label="city" 
                  placeholder="Cidade" 
                  {...register('city')}
                  error={errors.city?.message}
                  register={register}
                />

                <Input 
                  id="state" 
                  label="state" 
                  placeholder="UF" 
                  {...register('state')}
                  error={errors.state?.message}
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
              <RadioBox 
                type='button'
                isActive={moneySupply === 'credit card'}
                onClick={() => setMoneySupply('credit card')}  
              >
                <CreditCardIcon/>
                <span>Cartão de crédito</span>
              </RadioBox>
              <RadioBox   
                type='button'
                isActive={moneySupply === 'debit card'}
                onClick={() => setMoneySupply('debit card')}  
              >
                <BankIcon/>
                <span>cartão de débito</span>
              </RadioBox>
              <RadioBox 
                type='button'
                isActive={moneySupply === 'cash'}
                onClick={() => setMoneySupply('cash')}  
              >
               <MoneyIcon/>
               <span>dinheiro</span>
              </RadioBox>
            </MoneySupplyWrapper>
          </Card>
        </OrderDataWrapper>

        <OrderProductsWrapper>
          <h3>Cafés selecionados</h3>
          <ItensWrapper>

            { cart.map( item => (
              <div key={item.product.id}>
                <div>
                <img src={item.product.image} alt="" />
                
                <SummaryOptions>
                  <span>{item.product.name}</span>
                  <div>
                    <InputNumber 
                      value={item.amount}
                      setValue={(e) => handleUpdateAmount(e, item.product.id)}
                    />
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
              </div>
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

            <SubmitButton disabled={amountItems < 1} type="submit" value="Confirmar pedido"/>
          </SummaryWrapper>
          </ItensWrapper>

        </OrderProductsWrapper>
     </Container>
    </form>
  )
}