interface IDbOperations
{
    public int MyProperty { get; set; }
    void connect();
    void saveUser(User user);
    void deleteUser(User user);
}