-- PK's --
ALTER TABLE DB_USERS ADD CONSTRAINT DB_USERS_PKEY PRIMARY KEY (USR_DOCTYPE , USR_NUMDOC);
ALTER TABLE DB_LOGIN ADD CONSTRAINT DB_LOGIN_PKEY PRIMARY KEY (USR_DOCTYPE , USR_NUMDOC);



-- FK's --
ALTER TABLE DB_ACCOUNTS  ADD CONSTRAINT FK_ACCOUNTS_USER FOREIGN KEY (USR_DOCTYPE,USR_NUMDOC) REFERENCES DB_USERS (USR_DOCTYPE,USR_NUMDOC);
ALTER TABLE DB_LOGIN  ADD CONSTRAINT FK_LOGIN_USER FOREIGN KEY (USR_DOCTYPE,USR_NUMDOC) REFERENCES DB_USERS (USR_DOCTYPE,USR_NUMDOC);
ALTER TABLE DB_TRANSACTIONS ADD CONSTRAINT FK_TRANSACTIONS_ACCOUNTS_ORIGIN FOREIGN KEY (TR_SOURCE_ACCOUNT) REFERENCES DB_ACCOUNTS(ACC_ID); 
ALTER TABLE DB_TRANSACTIONS ADD CONSTRAINT FK_TRANSACTIONS_ACCOUNTS_DESTINY FOREIGN KEY (TR_DESTINY_ACCOUNT) REFERENCES DB_ACCOUNTS(ACC_ID); 
ALTER TABLE DB_TRANSACTIONS ADD CONSTRAINT FK_TRANSACTIONS_BANK_DESTINY FOREIGN KEY (TR_DESTINY_BANK) REFERENCES DB_BANKS(BNK_ID);
ALTER TABLE DB_OVERDRAWS ADD CONSTRAINT FK_OVERDRAWS_ACCOUNTS FOREIGN KEY (acc_number) REFERENCES DB_ACCOUNTS(ACC_ID);


-- Delete FK
ALTER TABLE DB_ACCOUNTS DROP CONSTRAINT FK_ACCOUNTS_USER;
ALTER TABLE DB_LOGIN DROP CONSTRAINT FK_LOGIN_USER;
ALTER TABLE DB_TRANSACTIONS DROP CONSTRAINT FK_TRANSACTIONS_ACCOUNTS_ORIGIN;
ALTER TABLE DB_TRANSACTIONS DROP CONSTRAINT FK_TRANSACTIONS_ACCOUNTS_DESTINY;
ALTER TABLE DB_TRANSACTIONS DROP CONSTRAINT FK_TRANSACTIONS_BANK_DESTINY;
ALTER TABLE DB_OVERDRAWS DROP CONSTRAINT FK_OVERDRAWS_ACCOUNTS;