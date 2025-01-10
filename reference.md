# Reference

## Order

<details><summary><code>client.order.<a href="/src/api/resources/order/client/Client.ts">getAll</a>() -> TronergyApi.OrdersDto</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.order.getAll();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Order.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.order.<a href="/src/api/resources/order/client/Client.ts">create</a>({ ...params }) -> TronergyApi.OrderDto</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.order.create({
    address: "TXY1kVZ74wLg4mPRPoK9o1RG99NY82MHEV",
    energy: 66000,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TronergyApi.CreateOrder`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Order.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.order.<a href="/src/api/resources/order/client/Client.ts">get</a>(orderId) -> TronergyApi.OrderDto</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.order.get("orderId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**orderId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Order.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.order.<a href="/src/api/resources/order/client/Client.ts">getRate</a>() -> TronergyApi.Rate</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.order.getRate();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Order.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
