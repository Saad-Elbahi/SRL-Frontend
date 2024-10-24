export class Client {
  id: number;
  name: string;
  address: string;
  email: string;
  ville: string;
  fiscalId: string;
  rc: string;
  cnss: string;
  rib: string;
  grantName: string;
  gerantTelephone: string;
  gerantEmail: string;

  constructor(
    id: number,
    name: string,
    address: string,
    email: string,
    ville: string,
    fiscalId: string,
    rc: string,
    cnss: string,
    rib: string,
    grantName: string,
    gerantTelephone: string,
    gerantEmail: string
  ) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.email = email;
    this.ville = ville;
    this.fiscalId = fiscalId;
    this.rc = rc;
    this.cnss = cnss;
    this.rib = rib;
    this.grantName = grantName;
    this.gerantTelephone = gerantTelephone;
    this.gerantEmail = gerantEmail;
  }
}
