# Studio Performance Data JSON Fields Description

This document describes the fields present in the `studio_performance_data.json` file.

All fields with _has_ or _is_ prefix are booleans, along with any _status_ field. Some status fields use 1 and 2, while others use 0 and 1. Make your own assumptions about what they mean but be sure to mention your choices.

## Fields

- **id**: An integer representing the unique identifier for the performance data entry.
- **studio_id**: An integer representing the identifier of the studio associated with this data.
- **start_date**: A string representing the start date of the performance period.
- **end_date**: A string representing the end date of the performance period.
- **filter_type**: A string indicating the type of filter applied (e.g., weekly).
- **campaign_type**: A string representing the type of campaign.
- **cpl**: A float representing the cost per lead.
- **fb_budget**: A float indicating the budget allocated for Facebook advertising.
- **google_budget**: A float or null, representing the budget allocated for Google advertising.
- **cac_value**: A float or null, representing the customer acquisition cost value.
- **fb_ad_lead**: A float indicating the number of leads from Facebook ads.
- **non_fb_ad_lead**: A float indicating the number of leads from non-Facebook ads.
- **no_intro_sale**: A float representing the number of introductory sales.
- **rollover_mem_sold**: A float indicating the number of rollover memberships sold.
- **weekly_cancel**: A float representing the number of weekly cancellations.
- **attendance**: An integer indicating the attendance count.
- **seven_day_revenue**: A string representing the revenue generated over seven days.
- **average_members**: A string indicating the average number of members.
- **paused_members**: A string representing the number of paused memberships.
- **lead_details**: A string or null, providing additional details about the leads.
- **status**: An integer indicating the status of the performance data entry.
- **created_by**: An integer representing the identifier of the user who created the entry.
- **updated_by**: An integer or null, representing the identifier of the user who last updated the entry.
- **deleted_by**: An integer or null, representing the identifier of the user who deleted the entry.
- **created_at**: A string representing the creation timestamp of the entry.
- **updated_at**: A string representing the last update timestamp of the entry.
- **deleted_at**: A string or null, indicating the deletion timestamp of the entry.
