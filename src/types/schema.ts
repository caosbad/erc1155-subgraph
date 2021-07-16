// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Transfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Transfer entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Transfer entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Transfer", id.toString(), this);
  }

  static load(id: string): Transfer | null {
    return store.get("Transfer", id) as Transfer | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get operator(): string {
    let value = this.get("operator");
    return value.toString();
  }

  set operator(value: string) {
    this.set("operator", Value.fromString(value));
  }

  get from(): string {
    let value = this.get("from");
    return value.toString();
  }

  set from(value: string) {
    this.set("from", Value.fromString(value));
  }

  get to(): string {
    let value = this.get("to");
    return value.toString();
  }

  set to(value: string) {
    this.set("to", Value.fromString(value));
  }

  get cardId(): BigInt | null {
    let value = this.get("cardId");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set cardId(value: BigInt | null) {
    if (value === null) {
      this.unset("cardId");
    } else {
      this.set("cardId", Value.fromBigInt(value as BigInt));
    }
  }

  get amount(): BigInt | null {
    let value = this.get("amount");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set amount(value: BigInt | null) {
    if (value === null) {
      this.unset("amount");
    } else {
      this.set("amount", Value.fromBigInt(value as BigInt));
    }
  }
}

export class CardOwner extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save CardOwner entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save CardOwner entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("CardOwner", id.toString(), this);
  }

  static load(id: string): CardOwner | null {
    return store.get("CardOwner", id) as CardOwner | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get cardId(): BigInt | null {
    let value = this.get("cardId");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set cardId(value: BigInt | null) {
    if (value === null) {
      this.unset("cardId");
    } else {
      this.set("cardId", Value.fromBigInt(value as BigInt));
    }
  }

  get amount(): BigInt | null {
    let value = this.get("amount");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set amount(value: BigInt | null) {
    if (value === null) {
      this.unset("amount");
    } else {
      this.set("amount", Value.fromBigInt(value as BigInt));
    }
  }

  get owner(): string {
    let value = this.get("owner");
    return value.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }
}
