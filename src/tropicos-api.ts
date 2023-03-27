import { RxHR, RxHttpRequestResponse } from '@akanass/rx-http-request';
import { Observable } from 'rxjs';
import {
	AccessOptions,
	ChromosomeCounts,
	Distributions,
	Images,
	ListNamesQuery,
	Name,
	References,
	Search,
	SearchQuery,
	Specimens,
	Summary,
	Synonyms
} from './tropicos-api.interface';
/**
 * @name TropicosApi
 * @class
 * @classdesc This class allows you to call methods for gathering data from the Tropicos web service (API).
 */
class TropicosApi {
	private basePath = 'http://services.tropicos.org/';
	/**
	 * @constructor
	 * @function
	 * @param {string} apiKey - Your api key that was given to you.
	 * @param {string} format - Use the word "xml" or "json" to choose how you want your output to be formatted.
	*/
	constructor(private accessOptions: AccessOptions) {}

	/**
	 * @name requestOptions
	 * @function
	 * @param {SearchQuery | ListNamesQuery} qs - Query parameters
	 * @param options - Request options (https://github.com/request/request#requestoptions-callback).
	 * @description Append required parameters into queries(API key and format). 
	 */
	private requestOptions(qs: SearchQuery | ListNamesQuery, options: any): any {
		qs.apiKey = this.accessOptions.apiKey;
		qs.format = this.accessOptions.hasOwnProperty('format') ? this.accessOptions.format : 'json';
		return { qs, ...options };
	}

	/**
     * @name search
	 * @function
     * @param {Search} qs - Query parameters.
	 * @param reqOptions - Request options (https://github.com/request/request#requestoptions-callback)
     * @description To search for a Name (http://services.tropicos.org/help?method=SearchNameXml).
     */
	search(qs: SearchQuery, reqOptions = {}): Observable<RxHttpRequestResponse<Search[]>> {
		// qs = this.appendAPIKeyAndFormat(qs) as SearchQuery;
		return RxHR.get(`${this.basePath}/Name/Search`, this.requestOptions(qs, reqOptions));
	}

	/**
     * @name summary
	 * @function
     * @param {number} id - The Name Id.
	 * @param reqOptions - Request options (https://github.com/request/request#requestoptions-callback)
     * @description Return summary data for a Name with a given id (http://services.tropicos.org/help?method=GetNameXml).
     */
	summary(id: number, reqOptions = {}): Observable<RxHttpRequestResponse<Summary>> {
		return RxHR.get(`${this.basePath}/Name/${id}`, this.requestOptions({}, reqOptions));
	}

	/**
     * @name synonyms
	 * @function
     * @param {number} id - The Name Id.
	 * @param reqOptions - Request options (https://github.com/request/request#requestoptions-callback)
     * @description Return all Synonyms for a Name with a given id (http://services.tropicos.org/help?method=GetNameSynonymsXml).
     */
	synonyms(id: number, reqOptions = {}): Observable<RxHttpRequestResponse<Synonyms[]>> {
		return RxHR.get(`${this.basePath}/Name/${id}/Synonyms`, this.requestOptions({}, reqOptions));
	}

	/**
     * @name acceptedNames
	 * @function
     * @param {number} id - The Name Id.
	 * @param reqOptions - Request options (https://github.com/request/request#requestoptions-callback)
     * @description Return all Accepted Names for a Name with a given id (http://services.tropicos.org/help?method=GetNameAcceptedNamesXml).
     */
	acceptedNames(id: number, reqOptions = {}): Observable<RxHttpRequestResponse<Synonyms[]>> {
		return RxHR.get(`${this.basePath}/Name/${id}/AcceptedNames`, this.requestOptions({}, reqOptions));
	}

	/**
     * @name distributions
	 * @function
     * @param {number} id - The Name Id.
	 * @param reqOptions - Request options (https://github.com/request/request#requestoptions-callback)
     * @description Return all Distribution records for a Name with a given id (http://services.tropicos.org/help?method=GetNameDistributionsXml).
     */
	distributions(id: number, reqOptions = {}): Observable<RxHttpRequestResponse<Distributions[]>> {
		return RxHR.get(`${this.basePath}/Name/${id}/Distributions`, this.requestOptions({}, reqOptions));
	}

	/**
     * @name references
	 * @function
     * @param {number} id - The Name Id.
	 * @param reqOptions - Request options (https://github.com/request/request#requestoptions-callback)
     * @description Return all Reference records for a Name with a given id (http://services.tropicos.org/help?method=GetNameReferencesXml).
     */
	references(id: number, reqOptions = {}): Observable<RxHttpRequestResponse<References[]>> {
		return RxHR.get(`${this.basePath}/Name/${id}/References`, this.requestOptions({}, reqOptions));
	}

	/**
     * @name images
	 * @function
     * @param {number} id - The Name Id.
	 * @param reqOptions - Request options (https://github.com/request/request#requestoptions-callback)
     * @description Return all Image records for a Name with a given id (http://services.tropicos.org/help?method=GetNameImagesXml).
     */
	images(id: number, reqOptions = {}): Observable<RxHttpRequestResponse<Images[]>> {
		return RxHR.get(`${this.basePath}/Name/${id}/Images`, this.requestOptions({}, reqOptions));
	}

	/**
     * @name chromosomeCounts
	 * @function
     * @param {number} id - The Name Id.
	 * @param reqOptions - Request options (https://github.com/request/request#requestoptions-callback)
     * @description Return all chromosome count records for a Name with a given id (http://services.tropicos.org/help?method=GetNameChromosomeCountsXml).
     */
	chromosomeCounts(id: number, reqOptions = {}): Observable<RxHttpRequestResponse<ChromosomeCounts[]>> {
		return RxHR.get(`${this.basePath}/Name/${id}/ChromosomeCounts`, this.requestOptions({}, reqOptions));
	}

	/**
     * @name higherTaxa
	 * @function
     * @param {number} id - The Name Id.
	 * @param reqOptions - Request options (https://github.com/request/request#requestoptions-callback)
     * @description Return all higher taxa for a Name with a given id (http://services.tropicos.org/help?method=GetNameHigherTaxaXml).
     */
	higherTaxa(id: number, reqOptions = {}): Observable<RxHttpRequestResponse<Name[]>> {
		return RxHR.get(`${this.basePath}/Name/${id}/HigherTaxa`, this.requestOptions({}, reqOptions));
	}

	/**
     * @name specimens
	 * @function
     * @param {number} id - The Name Id.
	 * @param reqOptions - Request options (https://github.com/request/request#requestoptions-callback)
     * @description Return all specimens for a Name with a given id (http://services.tropicos.org/help?method=GetNameSpecimensXml).
     */
	specimens(id: number, reqOptions = {}): Observable<RxHttpRequestResponse<Specimens[]>> {
		return RxHR.get(`${this.basePath}/Name/${id}/Specimens`, this.requestOptions({}, reqOptions));
	}

	/**
     * @name listNames
	 * @function
     * @param {ListNamesQuery} qs - The Name Id.
	 * @param reqOptions - Request options (https://github.com/request/request#requestoptions-callback)
     * @description To return Names (http://services.tropicos.org/help?method=ListNamesXml).
     */
	listNames(qs: ListNamesQuery, reqOptions = {}): Observable<RxHttpRequestResponse<Name[]>> {
		return RxHR.get(`${this.basePath}/Name/List`, this.requestOptions(qs, reqOptions));
	}
}

export = TropicosApi