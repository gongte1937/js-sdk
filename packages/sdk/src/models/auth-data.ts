import { SymmetricKey } from './symmetric-key';

/**
 * `AuthData` is a container for all the data required to perform actions on behalf of a Meeco User.
 *
 * *Note:* Actual `AuthData` passed to method calls doesn't need to be an instance of this class - it can just conform to the interface.
 */
export class AuthData {
  public data_encryption_key: SymmetricKey;
  public key_encryption_key: SymmetricKey;
  public keystore_access_token: string;
  public passphrase_derived_key: SymmetricKey;
  public secret: string;
  public vault_access_token: string;
  public delegation_id?: string;

  constructor(config: {
    data_encryption_key: SymmetricKey;
    key_encryption_key: SymmetricKey;
    keystore_access_token: string;
    passphrase_derived_key: SymmetricKey;
    secret: string;
    vault_access_token: string;
  }) {
    this.data_encryption_key = config.data_encryption_key;
    this.key_encryption_key = config.key_encryption_key;
    this.keystore_access_token = config.keystore_access_token;
    this.passphrase_derived_key = config.passphrase_derived_key;
    this.secret = config.secret;
    this.vault_access_token = config.vault_access_token;
  }
}
