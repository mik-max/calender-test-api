INSERT INTO [dbo].[events](
     [title],
     [userId],
     [details],
     [startDate],
     [endDate],
     [attendance],
     [venue]
)

VALUES (
     @title,
     @userId,
     @details,
     @startDate,
     @endDate,
     @attendance,
     @venue

);

-- SELECT SCOPE_IDENTITY() AS id