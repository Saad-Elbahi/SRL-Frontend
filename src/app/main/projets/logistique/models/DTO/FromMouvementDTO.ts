import { Affaire } from "../affaire.model";
import { Fournisseur } from "../fournisseur";

export interface FromMouvementDTO {
    vehiculeRouteId: number;
    affaire: Affaire | null;
    fournisseur: Fournisseur | null;
    bl: string;
    blMontant: number;
    dateBl: Date;
}
