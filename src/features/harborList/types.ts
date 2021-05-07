export interface HarborData {
  id: string;
  electricity: number;
  gate: number;
  lighting: number;
  wasteCollection: number;
  water: number;
  name: string;
  numberOfPlaces: number;
  numberOfInactivePlaces: number;
  numberOfFreePlaces: number;
  streetAddress: string | null;
  zipCode: string | null;
  municipality: string | null;
  wwwUrl: string | null;
  imageFile: string | null;
  servicemapId: string | null;
  maxWidth: number | null;
}
