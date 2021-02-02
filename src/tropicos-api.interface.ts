export interface AccessOptions {
	apiKey: string;
	format?: string;
}
export interface SearchQuery {
	apiKey?: string;
	commonname?: string;
	family?: string;
	format?: string;
	name?: string;
	nameid?: string;
	orderby?: string;
	pagesize?: string;
	sortorder?: string;
	startrow?: string;
	type?: string;
}

export interface ListNamesQuery {
	apiKey?: string;
	format?: string;
	pagesize?: number;
	startid: number;
}

export interface Search {
	Author?: string;
	DisplayDate?: string;
	DisplayReference?: string;
	Family?: string;
	NameId?: number;
	NomenclatureStatusID?: number;
	NomenclatureStatusName?: string;
	RankAbbreviation?: string;
	ScientificName?: string;
	ScientificNameWithAuthors?: string;
	Symbol?: string;
	TotalRows?: number;
}

export interface Summary {
	AcceptedNameCount?: string;
	Author?: string;
	Citation?: string;
	Copyright?: string;
	Family?: string;
	Genus?: string;
	NameId?: number;
	NamePublishedCitation?: string;
	NomenclatureStatusID?: number;
	NomenclatureStatusName?: string;
	Rank?: string;
	RankAbbreviation?: string;
	ScientificName?: string;
	ScientificNameWithAuthors?: string;
	Source?: string;
	SpeciesEpithet?: string;
	Symbol?: string;
	SynonymCount?: string;
	TypeSpecimens?: TypeSpecimen[];
}

export interface TypeSpecimen {
	CollectionNumber?: string;
	CollectorName?: string;
	Institution?: string;
	KindOfTypeAbbrev?: string;
	KindOfTypeName?: string;
	TypeNote?: string;
}

export interface Synonyms {
	AcceptedName?: Name;
	Reference?: Reference;
	SynonymName?: Name;
}

export interface Name {
	Author?: string;
	DisplayDate?: string;
	DisplayReference?: string;
	Family?: string;
	NameId?: number;
	NomenclatureStatusName?: string;
	Rank?: string;
	RankAbbreviation?: string;
	ScientificName?: string;
	ScientificNameWithAuthors?: string;
}

export interface References {
	AcceptedBy?: boolean;
	Annotation?: string;
	Reference?: Reference;
}

export interface Reference {
	AbbreviatedTitle?: string;
	ArticleTitle?: string;
	Collation?: string;
	FullCitation?: string;
	PublicationId?: number;
	ReferenceId?: number;
	TitlePageYear?: string;
	YearPublished?: string;
}

export interface Distributions {
	Location?: Location;
	Reference?: Reference;
}

export interface Location {
	CountryLocationID?: number;
	CountryName?: string;
	LocationID?: number;
	RegionLocationID?: number;
	RegionName?: string;
	UpperLocationID?: number;
	UpperName?: string;
}

export interface Images {
	Barcode?: string;
	Caption?: string;
	Copyright?: string;
	CopyrightUrl?: string;
	DetailJpgUrl?: string;
	DetailUrl?: string;
	ImageId?: number;
	ImageKindText?: string;
	LicenseName?: string;
	LicenseUrl?: string;
	LongDescription?: string;
	NameId?: number;
	NameText?: string;
	Photographer?: string;
	ShortDescription?: string;
	SpecimenId?: number;
	SpecimenText?: string;
	ThumbnailUrl?: string;
}

export interface ChromosomeCounts {
	DisplayName?: string;
	Reference?: Reference;
	SporophyticCount?: string;
}

export interface Specimens {
	CollectionNumber?: string;
	CollectorString?: string;
	CoordinateSource?: string;
	CountryName?: string;
	DateDisplay?: string;
	Institution?: string;
	Latitude?: number;
	LatitudeDisplay?: string;
	Longitude?: number;
	LongitudeDisplay?: string;
	SpecimenId?: number;
}
