import { createRandomNumber } from "utils/randomNumber";

export async function addBill(data: {
  title: string;
  value: number;
  dueTime?: Date;
}) {
  const bill: Bill = {
    id: createRandomNumber(),
    ...data,
  };

  console.log("adicionado conta...", bill);
}

export async function deleteBill(id: number) {
  console.log("removendo conta...", id);
}

export async function findBill(id: number): Promise<Bill | undefined> {
  return undefined;
}

export async function listBills(): Promise<Bill[]> {
  return [];
}

export type Bill = {
  id: number;
  title: string;
  value: number;
  dueTime?: Date;
};
