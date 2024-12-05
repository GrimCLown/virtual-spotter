# Studios JSON Fields Description

This document describes the fields present in the `studios.json` file.

All fields with _has_ or _is_ prefix are booleans, along with any _status_ field.
Some status fields use 1 and 2, while others use 0 and 1. Make your own assumptions about what they mean but be sure to mention your choices.

## Fields

- **id**: An integer representing the unique identifier for the studio.
- **uuid**: A string representing the universally unique identifier for the studio.
- **business_type**: A string indicating the type of business (e.g., gym).
- **franchise_id**: An integer or null, representing the franchise identifier if applicable.
- **name**: A string representing the name of the studio.
- **address**: A string indicating the location of the studio.
- **time_zone**: A string or null, representing the time zone of the studio.
- **country**: A string or null, indicating the country where the studio is located.
- **country_code**: A string or null, representing the ISO country code.
- **currency_symbol**: A string or null, representing the symbol of the currency used.
- **currency_text**: A string or null, indicating the text representation of the currency.
- **logo**: A string representing the path to the studio's logo image.
- **logo_url**: A string representing the URL to the studio's logo image.
- **country_id**: An integer representing the identifier for the country.
- **status**: An integer indicating the status of the studio.
- **owner_id**: An integer representing the identifier of the studio's owner.
- **primary_contact_user_id**: An integer representing the identifier of the primary contact user.
- **plan_id**: An integer indicating the plan identifier associated with the studio.
- **updated_discount_code**: A string or null, representing the updated discount code if applicable.
- **subs_expired**: A boolean or null, indicating if the subscription has expired.
- **restricted_access**: A boolean or null, indicating if access is restricted.
- **next_due_date**: A string representing the next due date for the studio's subscription.
- **has_mb_account**: A boolean or null, indicating if the studio has a MindBody account.
- **is_mb_skipped**: A boolean or null, indicating if the MindBody account setup is skipped.
- **mb_account_type**: A string or null, representing the type of MindBody account.
- **cron_status**: An integer indicating the status of the cron job.
- **cron_last_updated**: A string or null, representing the last update time of the cron job.
- **deleted_at**: A string or null, indicating the deletion timestamp of the studio.
- **deleted_by**: An integer or null, representing the identifier of the user who deleted the studio.
- **created_at**: A string representing the creation timestamp of the studio.
- **updated_at**: A string representing the last update timestamp of the studio.
- **created_by**: An integer representing the identifier of the user who created the studio.
