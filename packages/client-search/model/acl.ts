// This file is generated, manual changes will be lost - read more on https://github.com/algolia/api-clients-automation.

/**
 * List of rights for the API key. The following rights can be used:  addObject: allows to add/update an object in the index (copy/move index are also allowed with this right). Analytics: allows to retrieve the analytics through the Analytics API. Browse: allows to retrieve all index content via the browse API. DeleteIndex: allows to delete or clear index content. DeleteObject: allows to delete objects from the index. EditSettings: allows to change index settings. ListIndexes: allows to list all accessible indices. Logs: allows to get the logs. Recommendation: Allows usage of the Personalization dashboard and the Recommendation API. Search: allows to search the index. SeeUnretrievableAttributes: disable unretrievableAttributes feature for all operations returning records. Settings: allows to get index settings.
 */
export type Acl =
  | 'addObject'
  | 'analytics'
  | 'browse'
  | 'deleteIndex'
  | 'deleteObject'
  | 'editSettings'
  | 'listIndexes'
  | 'logs'
  | 'personalization'
  | 'recommendation'
  | 'search'
  | 'seeUnretrievableAttributes'
  | 'settings'
  | 'usage';
